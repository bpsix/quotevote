import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

export const fetchOrCreateUser = async (email: string, name: string) => {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
        AND: {
          name,
        },
      },
    });
    return user;
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code == 'P2025'
    ) {
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return newUser;
    } else {
      throw new Error(`An error occurred: ${error}`);
    }
  }
};

export const getQuotesByAuthorId = async (authorId: string) => {
  try {
    const quotes = prisma.quote.findMany({
      where: {
        authorId,
      },
    });
    return quotes;
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
};

export const createQuote = async (authorId: string, content: string) => {
  try {
    const quote = await prisma.quote.create({
      data: {
        content,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
    return quote;
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
};
