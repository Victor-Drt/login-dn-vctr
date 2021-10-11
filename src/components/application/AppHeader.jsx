import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid';
//import DataGrid from 'react-data-grid';
import purple from '@material-ui/core/colors/purple';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import BtnCellRenderer from './BtnCellRenderer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        background: {
          default: "#e4f0e2"
        },
      },
    palette: {
        background: {
          default: "#e4f0e2"
        }
      }
    },
}));

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

  const UpdateButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="#b62020"
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

  const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#ee5656',
      },
      secondary: {
        main: '#f50057',
      },
    },
  };
  
  const theme = createTheme(themeOptions);

  export default function AppHeader() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
              <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">
                  Cadastro de Aplicação: Adicionar, Consultar, Atualizar e Deletar 
                </Typography>
              </Toolbar>
            </AppBar>
            <TextField id="filled-basic" label="Insira aplicação" variant="filled" />
            <Button variant="contained" color='#dc3545'>  Incluir
              </Button>
          <Button variant="contained" color="#dc3545">
                Consultar lista de aplicações
              </Button> 

              <div
                className="ag-theme-balham"
                style={{ height: '300px', width: '800px' }}
            >
                <AgGridReact
                  frameworkComponents={{
                    btnCellRenderer: BtnCellRenderer,
                  }}
                    rowData={[
                      {nome: "Aplicação 1", descricao: "*****", url: "url da aplicação 1"},
                      {nome: "Aplicação 2", descricao: "*****", url: "url da aplicação 2"},
                      {nome: "Aplicação 3", descricao: "*****", url: "url da aplicação 3"}
                  ]}>
                    <AgGridColumn field="nome"></AgGridColumn>
                    <AgGridColumn field="descricao"></AgGridColumn>
                    <AgGridColumn field="url"></AgGridColumn>
                    <AgGridColumn field="deletar"></AgGridColumn>
                    <AgGridColumn field="atualizar"></AgGridColumn>
                    
                </AgGridReact>
            </div>
            </div>
    );
  }