/* protect api key using API route*/
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  const appId = process.env.API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}&units=metric`
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
}