import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ModalProduct from "../component/modalProduct";

const ListProduct = () => {
	const { store, actions } = useContext(Context);
	const [currentProduct, setCurrentProduct] = useState({});

	useEffect(() => {
		actions.listProduct();
	}, []);

	return (
		<>
			<ModalProduct
				idModal="modal-change-product"
				buttonTitle="Modificar Producto"
				modalHeader="Modificación de Producto"
				nameButton="Modificar"
				messageSuccess="Modificación Exitosa"
				messageError="error de Modificar"
				isCreated={false}
				product={currentProduct ? currentProduct : {}}
			/>
			<table className="container table table-striped text-center table-fill my-5">
				<thead>
					<tr>
						<th scope="col" className="text-left">
							ID
						</th>
						<th scope="col" className="text-left">
							Nombre
						</th>
						<th scope="col" className="text-left">
							Código
						</th>
						<th scope="col" className="text-left">
							Cantidad
						</th>
						<th scope="col" className="text-left">
							Precio
						</th>
						<th />
					</tr>
				</thead>
				<tbody className="table-hover">
					{store.listProducts && store.listProducts.length > 0 ? (
						store.listProducts.map((value, index) => {
							return (
								<tr key={index}>
									<td scope="row" className="text-center">
										{value.id}
									</td>
									<td className="text-center">{value.name}</td>
									<td className="text-center">{value.code}</td>
									<td className="text-center">{value.quantity}</td>
									<td className="text-center">{value.price}</td>
									<td>
										<button
											onClick={() => {
												setCurrentProduct(value);
											}}
											className="px-2 ms-3 link-pen btn btn-link"
											data-bs-toggle="modal"
											data-bs-target={"#modal-change-product"}>
											<i className="fas fa-pen" />
										</button>
										<button
											className="px-2 me-1 link-trash btn btn-link "
											onClick={() => {
												actions.deleteProduct(value.id).then(() => {
													actions.listProduct();
												});
												//actions.listProduct(); // ver la otra forma de actualizar el listado sin llamar al API
											}}>
											<i className="fas fa-trash" />
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="12">No tiene producto</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default ListProduct;