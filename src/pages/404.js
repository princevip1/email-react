import { Button, Result } from "antd";
import Link from "next/link";
const App = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Link href="/dashboard">
        <Button type="primary">Back to Dashboard</Button>
      </Link>
    }
  />
);
export default App;
