# training-frontend-test

live at https://training-frontend-test.vercel.app/

## run on local

```bash
npm i
npm run dev
```

## playwright

- install
```bash
npx playwright install
```

- codegen
```bash
npx playwright codegen http://localhost:3000
```

- run

```bash
npx playwright test --debug
```

## run with MCP

- configuration Claude Desktop

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

- prompt

```bash
localhost:3000に対して以下のシナリオテストをお願いします
* Inboxを押して一番上のメールを開いて、返信としてhelloと入力し、送信する
```