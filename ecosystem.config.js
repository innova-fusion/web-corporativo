module.exports = {
    apps: [
      {
        name: 'web-corporativa',    // Nombre del proceso
        script: 'npm',              // Comando para iniciar la aplicación
        args: 'start',              // Argumentos del comando
        instances: 1,               // Número de instancias (puede ser 'max' para usar todos los núcleos de CPU)
        autorestart: true,          // Auto-reinicio en caso de fallo
        watch: false,               // No observar cambios en archivos
        max_memory_restart: '1G',   // Reiniciar si se excede esta cantidad de memoria
        env: {
          NODE_ENV: 'production'    // Variables de entorno
        }
      }
    ]
  };