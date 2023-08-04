import React from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


function Clientes() {
  // Contenido del componente Asesores
  return (
    <>
      <Link to="/modalservice">
      <Button className="shadow mb-5 ms-auto mr-5" color="success">Crear Cliente +</Button>
      </Link>
      <Table>
        <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Identificación</Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Celular</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-500 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>Microsoft Surface Pro</p>
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default Clientes;
