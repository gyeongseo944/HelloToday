import { DATABASE_ID, TOKEN } from "@/config";

export async function getDatas(req, res) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };
  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const result = await response.json();
    res.status(200).json({ result });
  } catch (error) {
    res.status(404).json({ error: "error" });
  }
}

export async function addDatas(req, res) {
  const form = JSON.parse(req.body);
  const body = {
    parent: {
      database_id: `${DATABASE_ID}`,
    },
    properties: {
      Todo: {
        title: [
          {
            text: {
              content: form.todoTitle,
            },
          },
        ],
      },
      Category: {
        type: "multi_select",
        multi_select: [
          {
            name: form.category,
          },
        ],
      },
      Date: {
        date: {
          start: form.todoDate,
        },
      },
    },
  };
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`https://api.notion.com/v1/pages`, options);
    const result = await response.json();
    res.status(200).json({ result });
  } catch (error) {
    res.status(404).json({ error: "error" });
  }
}

export async function updateDatas(req, res) {
  const body = JSON.parse(req.body);
  const option =
    body.reqType === "check"
      ? {
          properties: {
            Complete: { checkbox: !body.now },
          },
        }
      : {
          archived: true,
        };
  const options = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify(option),
  };
  try {
    const response = await fetch(`https://api.notion.com/v1/pages/${body.id}`, options);
    const result = await response.json();
    res.status(200).json({ result });
  } catch (error) {
    res.status(404).json({ error: "error" });
  }
}
