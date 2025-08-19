/* protect api key using API route*/
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  const appId = process.env.API_KEY;

  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${appId}`
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
}
