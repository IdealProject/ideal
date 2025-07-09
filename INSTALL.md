# Guía de instalación

### Instalar Visual Studio Code (VS Code)
- Descarga oficial: [VS Code Download](https://code.visualstudio.com/download)

### Instalar Node.js
- Descarga oficial: [Node.js Download](https://nodejs.org/en/download)

Recomendamos seguir las instrucciones oficiales y no descargar directamente el instalador. También sugerimos reemplazar el número de versión por --lts, como se muestra a continuación:

```bash
# Descargar e instalar Node.js:
nvm install --lts
```

### Instalar pnpm
```bash
npm install -g pnpm
pnpm install
```

## Para ejecutar en local:
```bash
pnpm run dev
```
Para ejecutar en el local también es posible copiar y pegar en el Browser el link que se encuentra en la terminal, al lado de "Local".
Se debe ver parecido a: http://127.0.0.1:4321

_Esta guía es efectiva para Linux y MacOSX, sistemas operativos en los que fue probada._