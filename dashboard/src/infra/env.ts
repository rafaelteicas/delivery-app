import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
	API_URL: z.string(),
});

export const env = envSchema.parse({
	API_URL: process.env.NEXT_PUBLIC_API_URL,
});
