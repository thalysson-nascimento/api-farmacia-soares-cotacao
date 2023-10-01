# api-farmacia-soares-cotacao

## Api de Entregas - Farmacia Soares

## Rodando o prisma

npx prisma studio

## para criar usuarios

npx ts-node-dev src/app.ts

## para gerar tabelas

npx prisma migrate dev --name CreateQuote

## definindo o nome da tabela no banco por meio do prisma schemas

@@map("nome_tabela")

## gerar as relações das tabelas no prisma apos criar ou modificar um model

npx prisma generate

## alterar tabela

roda o comando `npx prisma migrate dev` e depois o comando informando o nome da tabela `alter_table_nome-tabela`
