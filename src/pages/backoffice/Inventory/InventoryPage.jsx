import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import {
  ActionsTable,
  InventoryContainer,
  InventoryTable,
} from "./InventoryPage.styles";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../api/services/productService";
import { formatPrice } from "../../../utils/strings";
import useLoadCatalog from "../../../hooks/useLoadCatalog";
import useLoadInventory from "../../../hooks/useLoadInventory";
import Loading from "../../../components/ui/loading/Loading";
import Error from "../../../components/ui/error/Error";

const productList = [
  { id: 1, sku: "SKU123", name: "Producto A", quantity: 10 },
  { id: 2, sku: "SKU456", name: "Producto B", quantity: 5 },
  { id: 3, sku: "SKU789", name: "Producto C", quantity: 20 },
];

const Inventory = () => {
  const { products, productsError, productsIsLoading } = useLoadInventory();

  const handleRemove = () => {
    console.log("Remove item");
  };

  return (
    <InventoryContainer>
      {!productsError && <h2>Inventario de productos</h2>}
      {productsIsLoading && !products && <Loading />}
      {!productsIsLoading && productsError && <Error />}
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
