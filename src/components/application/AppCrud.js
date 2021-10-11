import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import { DataGrid } from '@mui/x-data-grid';
import {
    AppBar,
    Toolbar,
    Typography,
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


  const UpdateButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
            >
                Atualizar
            </Button>
        </strong>
    )
}

const DeleteButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
            >
                Deletar
            </Button>
        </strong>
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'appName',
      headerName: 'Nome da aplicação',
      width: 300,
      editable: true,
    },
    {
      field: 'user',
      headerName: 'Descrição da aplicação',
      width: 300,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Data da última atualização',
      width: 300,
      editable: true,
    },
    {
        field: 'url',
        headerName: 'URL da aplicação',
        width: 300,
        editable: true, 
    },
    {
        field: 'update',
        headerName: 'Atualizar',
        width: 150,
        editable: true,
        renderCell: UpdateButton,
    },
    {
        field: 'delete',
        headerName: 'Deletar',
        width: 150,
        editable: true,
        renderCell: DeleteButton,
    }
  ];
  

  const rows = [
    { id: 1, appName: 'Aplicação 1', user: 'Usuário 1', date: '23.04.2021' },
    { id: 2, appName: 'Aplicação 2', user: 'Usuário 2', date: '24.04.2021' },
    { id: 3, appName: 'Aplicação 3', user: 'Usuário 3', date: '25.04.2021' },
    { id: 4, appName: 'Aplicação 4', user: 'Usuário 4', date: '26.04.2021' },
    { id: 5, appName: 'Aplicação 5', user: 'Usuário 5', date: '27.04.2021' },
    { id: 6, appName: 'Aplicação 6', user: 'Usuário 6', date: '28.04.2021' },
    { id: 7, appName: 'Aplicação 7', user: 'Usuário 7', date: '29.04.2021' },
    { id: 8, appName: 'Aplicação 8', user: 'Usuário 8', date: '30.04.2021' },
    { id: 9, appName: 'Aplicação 9', user: 'Usuário 9', date: '31.04.2021' },
  ];


  
  export default function AppCrud() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
  
            <TextField id="filled-basic" label="Insira o nome da aplicação" variant="filled" />
  
          <Button variant="contained" color="primary">
                Incluir
              </Button>
          <Button variant="contained" color="secondary">
                Consultar lista de aplicações
              </Button>

              <div
                className="ag-theme-balham"
                style={{ height: '200px', width: '600px' }}
            >
                <AgGridReact
                    rowData={[
                      {make: "Toyota", model: "Celica", price: 35000},
                      {make: "Ford", model: "Mondeo", price: 32000},
                      {make: "Porsche", model: "Boxter", price: 72000}
                  ]}>
                    <AgGridColumn field="make"></AgGridColumn>
                    <AgGridColumn field="model"></AgGridColumn>
                    <AgGridColumn field="price"></AgGridColumn>
                </AgGridReact>
            </div>
        </div>
  
    );
  }
  
  


