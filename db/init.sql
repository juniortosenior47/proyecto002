SELECT 'CREATE DATAASE jntosndb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'jntosndb')\gexec