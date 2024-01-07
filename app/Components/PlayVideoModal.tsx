import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

interface IAppProps {
  title: string;
  overView: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
}

export function PlayVideoModal({
  changeState,
  overView,
  state,
  title,
  youtubeUrl,
}: IAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px"></DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{overView}</DialogDescription>
      </DialogHeader>
    </Dialog>
  );
}
