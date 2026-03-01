export default async function handler(req, res) {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzYSTKTazeVKAkol6YFCttapUlpmGbWHhBPfQZbM0T_CRLPX0WjD12QXYt_Cmi-ps3W/exec';
  try {
    const response = await fetch(scriptURL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal tarik data', detail: error.message });
  }
}