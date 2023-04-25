import { Button } from 'antd';
import { Link, history } from 'umi';
export default function IndexPage() {
  return (
    <div>
      <h1>
        <Link to="/"> Page text</Link>
        <Button type="primary" onClick={()=>{
            history.push('/');
        }}>
          Primary
        </Button>
      </h1>
    </div>
  );
}
