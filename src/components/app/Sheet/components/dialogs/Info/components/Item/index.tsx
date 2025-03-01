import Empty from "@/components/common/Empty";
import { PropsWithChildren, ReactNode } from "react";

interface InfoItemProps extends PropsWithChildren {
  icon: ReactNode;
}

function InfoItem({ icon, children }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4 text-sm">
      <span>{icon}</span>
      <div>{children ? children : <Empty type="small" />}</div>
    </div>
  );
}

export default InfoItem;
