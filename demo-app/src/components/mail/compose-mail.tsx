import { DialogContent, Dialog, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

interface ComposeMailProps {
  open: boolean;
  onClose: () => void;
}

interface MailFormValues {
  to: string;
  subject: string;
  body: string;
}

export function ComposeMail({ open, onClose }: ComposeMailProps) {
  const form = useForm<MailFormValues>({
    defaultValues: {
      to: "",
      subject: "",
      body: ""
    }
  });

  const onSubmit = (data: MailFormValues) => {
    // ここでは実際に送信せず、送信成功をシミュレートします
    console.log("メール送信:", data);
    toast.success("メールが送信されました");
    onClose();
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[500px]" data-testid="compose-dialog">
        <DialogHeader>
          <DialogTitle>新規メール作成</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>宛先</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} required data-testid="to-input" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>件名</FormLabel>
                  <FormControl>
                    <Input placeholder="件名を入力" {...field} required data-testid="subject-input" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>本文</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="メッセージを入力" 
                      rows={8} 
                      {...field} 
                      required
                      data-testid="body-input"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button variant="outline" type="button" onClick={onClose}>
                キャンセル
              </Button>
              <Button type="submit" data-testid="send-button">
                送信
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
