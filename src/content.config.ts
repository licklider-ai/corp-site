import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const correctionSchema = z.object({
  date: z.coerce.date(),
  note: z.string().min(1),
  url: z.string().url().optional(),
});

const engineeringSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    kind: z.enum(['explainer', 'measurement', 'postmortem', 'third_party_issue']),
    status: z.enum(['draft', 'published', 'corrected', 'superseded', 'withdrawn']),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    authors: z.array(z.string().min(1)).min(1).default(['Licklider']),
    softwareVersions: z.array(z.string().min(1)).default([]),
    upstreamRefs: z.array(z.string().url()).default([]),
    publicEvidenceRefs: z.array(z.string().url()).default([]),
    corrections: z.array(correctionSchema).default([]),
    supersedes: z.string().min(1).optional(),
    supersededBy: z.string().min(1).optional(),
  })
  .superRefine((entry, ctx) => {
    if (entry.status !== 'draft' && !entry.publishedAt) {
      ctx.addIssue({
        code: 'custom',
        path: ['publishedAt'],
        message: 'publishedAt is required for non-draft Engineering content.',
      });
    }

    if (
      entry.publishedAt &&
      entry.updatedAt &&
      entry.updatedAt.getTime() < entry.publishedAt.getTime()
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['updatedAt'],
        message: 'updatedAt must not precede publishedAt.',
      });
    }

    if (entry.kind === 'measurement') {
      if (entry.softwareVersions.length === 0) {
        ctx.addIssue({
          code: 'custom',
          path: ['softwareVersions'],
          message: 'measurement articles require at least one softwareVersions entry.',
        });
      }
      if (entry.publicEvidenceRefs.length === 0) {
        ctx.addIssue({
          code: 'custom',
          path: ['publicEvidenceRefs'],
          message: 'measurement articles require at least one publicEvidenceRefs entry.',
        });
      }
    }

    if (entry.kind === 'third_party_issue') {
      if (entry.upstreamRefs.length === 0) {
        ctx.addIssue({
          code: 'custom',
          path: ['upstreamRefs'],
          message: 'third_party_issue articles require at least one upstreamRefs entry.',
        });
      }
      if (entry.publicEvidenceRefs.length === 0) {
        ctx.addIssue({
          code: 'custom',
          path: ['publicEvidenceRefs'],
          message: 'third_party_issue articles require at least one publicEvidenceRefs entry.',
        });
      }
    }

    if (entry.status === 'corrected' && entry.corrections.length === 0) {
      ctx.addIssue({
        code: 'custom',
        path: ['corrections'],
        message: 'corrected articles require at least one correction record.',
      });
    }

    if (entry.status === 'superseded' && !entry.supersededBy) {
      ctx.addIssue({
        code: 'custom',
        path: ['supersededBy'],
        message: 'superseded articles require supersededBy.',
      });
    }
  });

const engineering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/engineering' }),
  schema: engineeringSchema,
});

export const collections = { engineering };
