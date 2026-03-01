// api/save-data.js
export default async function handler(req, res) {
  const scriptURL = 'URL_APPS_SCRIPT_KAMU'; // URL /exec kamu

  if (req.method === 'POST') {
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}