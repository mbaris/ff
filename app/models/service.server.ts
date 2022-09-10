import type { User, Service } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Service } from "@prisma/client";

export function getService({
  id,
  userId,
}: Pick<Service, "id"> & {
  userId: Service["id"];
}) {
  return prisma.service.findFirst({
    select: { id: true, name: true, description: true },
    where: { id, userId },
  });
}

export function listServices({ userId }: { userId: User["id"] }) {
  return prisma.service.findMany({
    where: { userId },
    select: { id: true, name: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createService({
  name,
  description,
  userId,
}: Pick<Service, "name" | "description"> & {
  userId: User["id"];
}) {
  return prisma.service.create({
    data: {
      name,
      description,
      owner: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteService({
  id,
  userId,
}: Pick<Service, "id"> & { userId: User["id"] }) {
  return prisma.service.deleteMany({
    where: { id, userId },
  });
}
