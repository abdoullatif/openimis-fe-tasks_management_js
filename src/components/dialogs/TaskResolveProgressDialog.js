import React from 'react';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { injectIntl } from 'react-intl';
import { formatMessage } from '@openimis/fe-core';

function TaskResolveProgressDialog({ intl, open }) {
  return (
    <Dialog open={open} maxWidth="xs" fullWidth disableEscapeKeyDown>
      <DialogTitle>
        {formatMessage(intl, 'tasksManagement', 'tasksManagement.task.resolveProgress.title')}
      </DialogTitle>
      <DialogContent style={{ textAlign: 'center', paddingBottom: 24 }}>
        <CircularProgress style={{ marginBottom: 16 }} />
        <Typography variant="body2" color="textSecondary">
          {formatMessage(intl, 'tasksManagement', 'tasksManagement.task.resolveProgress.message')}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default injectIntl(TaskResolveProgressDialog);
