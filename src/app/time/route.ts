export const dynamic = 'force-dynamic'; // для отключения кэширования

export async function GET() {
    return Response.json({
        time: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })
    })
}