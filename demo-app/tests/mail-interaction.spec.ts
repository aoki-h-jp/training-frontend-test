import { test, expect } from '@playwright/test';

test('メール閲覧と返信のテスト', async ({ page }) => {
  // アプリにアクセス
  await page.goto('http://localhost:3000/');
  
  // メール一覧からメールを選択
  await page.getByRole('link', { name: 'Inbox' }).click();
  await page.getByTestId('mail-item-1').click();
  
  // メール内容が表示されることを確認
  await expect(page.getByTestId('mail-display')).toBeVisible();
  
  // 返信を入力
  await page.getByTestId('reply-input').click();
  await page.getByTestId('reply-input').fill('hello');
  
  // 送信ボタンをクリック
  await page.getByTestId('send-button').click();
  
  // 送信成功メッセージが表示されることを確認
  await expect(page.getByText('メールを送信しました')).toBeVisible();
});
