import { StyledTable } from "./components/StyledTable";

interface Props {
  children: React.ReactNode;
}
export default function Table({ children }: Props) {
  return (
    <StyledTable thWidth={100} tdWidth={250}>
      <div className="frame_table">{children}</div>
    </StyledTable>
  );
}
