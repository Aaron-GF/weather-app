/* protecta api key using end point to API route */
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const appId = process.env.API_KEY;

  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${appId}`
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
}
