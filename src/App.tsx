import Catalog from '@/pages/Catalog/Catalog';
import Home from '@/pages/Home/Home';

import { Search } from '@/modules/Search/Search';

import { Card } from '@/components/Card/Card';

import { Button } from '@/ui/Button/Button';
const App = () => {
  return (
    <>
      <h2>hello</h2>
      <Home />
      <Catalog />
      <Search />
      <Card />
      <Button />
    </>
  );
};
export default App;
