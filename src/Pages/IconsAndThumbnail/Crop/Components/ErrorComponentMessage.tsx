import { Alert, AlertTitle } from "@mui/material";

interface Props {
  error: string;
}

const ErrorComponentMessage = ({ error }: Props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      <strong>{error}</strong>
    </Alert>
  );
};

export default ErrorComponentMessage;
