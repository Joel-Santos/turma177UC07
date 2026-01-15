/*
  Warnings:

  - Added the required column `cursoId` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Made the column `nome` on table `Aluno` required. This step will fail if there are existing NULL values in that column.
  - Made the column `matricula` on table `Aluno` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "cursoId" INTEGER NOT NULL,
ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "matricula" SET NOT NULL;

-- CreateTable
CREATE TABLE "Curso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
