import { StyledTable } from "./components/StyledTable";

interface Props {
  children: React.ReactNode,
  thWidth: number,
  tdWidth: number,
  tdWidth_2?: number
}
export default function Table({ children, thWidth, tdWidth, tdWidth_2 }: Props) {
  return (
    <StyledTable thWidth={thWidth} tdWidth={tdWidth} tdWidth_2={tdWidth_2}>
      <div className="frame_table">{children}</div>
    </StyledTable>
  );
}
