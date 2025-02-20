import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { ActionsTable, InventoryContainer, InventoryTable } from './InventoryPage.styles';
import { formatPrice } from '../../../utils/strings';
import useLoadInventory from '../../../hooks/useLoadInventory';
import Loading from '../../../components/ui/loading/Loading';
import InternalError from '../../../components/ui/error/InternalError';

const Inventory = () => {
  const { products, productsError, productsIsLoading } = useLoadInventory();

  const handleRemove = () => {
    console.log('Remove item');
  };

  return (
    <InventoryContainer>
      {!productsError && <h2>Inventario de productos</h2>}
      {productsIsLoading && !products && <Loading />}
      {!productsIsLoading && productsError && <InternalError />}
      {!productsError && products && (
        <InventoryTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>SKU</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.sku}</td>
                  <td>{product.titulo}</td>
                  <td>{formatPrice(product.precio)}</td>
                  <ActionsTable>
                    <Link to={`/backoffice/editar-producto/${product.id}`}>
                      <MdEdit />
                    </Link>
                    <FaTrash onClick={handleRemove} />
                  </ActionsTable>
                </tr>
              );
            })}
          </tbody>
        </InventoryTable>
      )}
    </InventoryContainer>
  );
};

export default Inventory;
