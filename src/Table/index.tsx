import { StyledTable } from "./components/StyledTable";

interface Props {
  children: React.ReactNode;
  thMinMiWidth: number;
  tdMinWidth: number;
  td2MinWidth?: number;
}
export default function Table({
  children,
  thMinMiWidth,
  tdMinWidth,
  td2MinWidth,
}: Props) {
  return (
    <StyledTable
      thMinMiWidth={thMinMiWidth}
      tdMinWidth={tdMinWidth}
      td2MinWidth={td2MinWidth}
    >
      <div className="frame_table">{children}</div>
    </StyledTable>
  );
}
