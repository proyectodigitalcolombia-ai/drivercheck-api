# DriverCheck API

API para consultar antecedentes de conductores en Colombia.

Consultas:

- Antecedentes policía
- Multas SIMIT
- Licencia RUNT
- Procuraduría

## instalación

npm install

## ejecutar

npm run dev

## endpoint

POST /api/drivers/check

body:

{
 "documento": "12345678"
}
