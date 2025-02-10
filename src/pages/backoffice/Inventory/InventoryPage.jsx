import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import {
  ActionsTable,
  InventoryContainer,
  InventoryTable,
} from "./InventoryPage.styles";

const productList = [
  { id: 1, sku: "SKU123", name: "Producto A", quantity: 10 },
  { id: 2, sku: "SKU456", name: "Producto B", quantity: 5 },
  { id: 3, sku: "SKU789", name: "Producto C", quantity: 20 },
];

const Inventory = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/backoffice/editar-producto/1");
  };

  const handleRemove = () => {
    console.log("Remove item");
  };
  return (
    <InventoryContainer>
      <h2>Inventario de productos</h2>
      <InventoryTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>SKU</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <ActionsTable>
                  <MdEdit onClick={handleNavigate} />
                  <FaTrash onClick={handleRemove} />
                </ActionsTable>
              </tr>
            );
          })}
        </tbody>
      </InventoryTable>
    </InventoryContainer>
  );
};

export default Inventory;
