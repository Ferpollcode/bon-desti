# BON DESTI - Control de accesos

Aplicacion web estatica para el Complejo Residencial BON DESTI.

Permite gestionar la operacion diaria de garita, el portal de habitantes, accesos de proveedores y obra, emergencias, rondines, pases QR, propietarios, vehiculos, reclamos y administracion del consorcio.

## Como abrir la app

Archivo principal:

```text
barrio_accesos.html
```

Se puede abrir directamente en el navegador, sin instalar dependencias ni iniciar un servidor.

## Pantalla inicial

La portada muestra:

- `BON DESTI`
- `Complejo Residencial`
- Accesos separados para `SEGURIDAD`, `RESIDENTES` y `ADMINISTRADORA`

No usa logo `BD` ni texto de barrio privado.

## Usuarios iniciales

### Seguridad

- Usuario: `Seguridad`
- Contrasena: `Seguridad`
- Acceso: sistema de garita completo.

### Residentes

- Usuario: `resi`
- Contrasena: `resi`
- Acceso: Portal habitantes.

### Administradora

- Usuario: `admin`
- Contrasena: `admin`
- Acceso: sistema completo, entrando al Dashboard.

## Modulos principales

### Garita / Seguridad

- Registro de ingresos y salidas.
- Seleccion rapida para ingreso de residente o visita.
- Validacion de DNI/CUIL contra datos locales ya registrados.
- Turnos de guardias.
- Rondines.
- Incidentes.
- Pases QR.
- Buzon destinado a garita.
- Emergencias activas.
- Configuracion de WhatsApp de garita y empresa de seguridad.

### Portal habitantes

El portal de habitantes prioriza la emergencia y acciones simples:

- Boton principal `EMERGENCIA`.
- Boton `AUTORIZAR VISITA`.
- Vista del guardia activo en garita.
- Vista de rondines nocturnos.
- Vista de proveedores y personal de obra que ingresaron en el dia.
- Generacion de pases temporales QR para visitantes.
- Buzon de denuncias, reclamos y sugerencias.
- Respuestas de garita o administracion visibles en el historial de mensajes.

### Dashboard

El Dashboard concentra la vista operativa y administrativa:

- Entradas del dia.
- Lotes registrados.
- Personal de obra ingresado.
- Residentes y vehiculos.
- Incidentes.
- Movimientos del dia.
- Vehiculos dentro.
- Resumen de Administradora.
- Emergencias activas.
- Seguridad actual.
- Ultimos rondines.
- Incidentes recientes.
- Propietarios y ocupacion.
- Publicacion de notificaciones.
- Votaciones de asamblea.
- Buzon para administracion con respuesta a residentes.

### Propietarios

Dentro de `Propietarios` se integran:

- Casas/lotes.
- Residentes.
- Vehiculos.
- Personas autorizadas.
- Importacion desde Excel/CSV.

### Obras y personal

- Registro de obreros, albaniles y personal de obra.
- Empresa o responsable.
- Vehiculo.
- Lote de obra.
- Horario permitido.
- Vigencia.
- Estado activo/inactivo.

## Emergencias

Hay dos flujos separados.

### Emergencia de habitantes

Desde el Portal habitantes:

- El boton `EMERGENCIA` avisa a garita.
- La alerta aparece en la pantalla de Seguridad.
- Si esta configurado el WhatsApp de garita, abre un mensaje preparado.
- En el panel se identifica como `Habitante -> Garita`.

### Emergencia de garita

Desde la pantalla principal de garita:

- El boton `EMERGENCIA` registra una emergencia de garita.
- Avisa a la empresa de seguridad mediante WhatsApp si esta configurado.
- Abre llamada al `911`.
- En el panel se identifica como `Garita -> Empresa de seguridad + 911`.

Configuracion en `Seguridad > Emergencias`:

- WhatsApp de garita.
- WhatsApp empresa de seguridad.
- Boton directo `Llamar 911`.

## Buzon y respuestas

Los residentes pueden enviar mensajes a:

- Garita.
- Administracion.

Tipos de mensaje:

- Denuncia.
- Reclamo.
- Sugerencia.

Garita y Administradora pueden:

- Ver mensajes.
- Responder.
- Marcar como resuelto o pendiente.

El residente ve la respuesta en `Mis ultimos mensajes`.

## Pases temporales QR

Los residentes pueden autorizar visitas desde `AUTORIZAR VISITA`.

Datos del pase:

- Nombre del visitante.
- DNI/CUIL.
- Telefono/WhatsApp.
- Motivo.
- Fecha desde/hasta.
- Horario permitido.
- Dias habilitados.

Garita puede validar el pase desde `Seguridad > Pases QR` usando camara o codigo manual.

## Importacion Excel/CSV

Desde `Propietarios > Importar Excel` se pueden cargar casas, propietarios, residentes y vehiculos.

Columnas recomendadas:

- `Casa`
- `Manzana`
- `Apellido propietario`
- `Nombre propietario`
- `DNI propietario`
- `Telefono`
- `Mail`
- `Estado`
- `Apellido mayor 1`
- `Nombre mayor 1`
- `DNI mayor 1`
- `Telefono mayor 1`
- `Patente 1`
- `Marca 1`
- `Modelo 1`
- `Color 1`
- `Tipo vehiculo 1`
- `Observaciones`

Tambien acepta columnas agrupadas como `Mayores`, `Residentes` o `Vehiculos`, separadas por `;`.

## Datos

La app guarda la informacion en `localStorage` del navegador con prefijo `gd_`.

Claves principales:

- `gd_auth_role`
- `gd_logged_in`
- `gd_theme`
- `gd_accesos`
- `gd_lotes`
- `gd_residentes`
- `gd_vehiculos`
- `gd_obras`
- `gd_autorizados`
- `gd_guardias`
- `gd_turnos`
- `gd_rondines`
- `gd_incidentes`
- `gd_emergencias`
- `gd_buzon`
- `gd_pases`
- `gd_whatsapp_garita`
- `gd_whatsapp_empresa_seguridad`

Importante: al ser una version estatica, los datos quedan guardados en el navegador y equipo donde se usa.

## Stack

- HTML5.
- CSS3.
- JavaScript vanilla.
- `localStorage`.
- Tabler Icons por CDN.
- SheetJS por CDN para Excel/CSV.
- QRCode por CDN.

No requiere backend para funcionar localmente.

## Estructura

```text
filesbondesti/
  assets/
    sirena-emergencia.png
  barrio_accesos.html
  README.md
```

Las carpetas de exportacion, backups o salidas generadas no forman parte del proyecto principal.

## Responsive

La interfaz esta adaptada para escritorio, tablet y celular:

- Portada en una columna en pantallas chicas.
- Botones tactiles grandes.
- Formularios apilados en mobile.
- Modales adaptados a pantalla chica.
- Tablas con scroll horizontal.
- Soporte para safe-area en iOS.

## Limitaciones actuales

Esta version es local y estatica.

Para uso real entre varios dispositivos hace falta publicar el sistema con una base de datos compartida o backend. Por ejemplo:

- Supabase.
- Firebase.
- Backend propio.
- Autenticacion real por usuario.
- WhatsApp Business API o servicio de mensajeria autorizado.

El login actual es local de interfaz y no reemplaza autenticacion segura de servidor.

## Proximos pasos sugeridos

- Backup y restauracion JSON.
- Exportar reportes CSV/PDF.
- Usuarios reales con cambio de contrasena.
- Base compartida para garita, residentes y administradora.
- Historial avanzado de emergencias.
- Confirmacion real de envio de WhatsApp.
