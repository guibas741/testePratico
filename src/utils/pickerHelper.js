import DocumentPicker from 'react-native-document-picker';

async function pickDocument(setFileUri, setFileName) {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    setFileUri(res.uri);
    setFileName(res.name);
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      setFileUri('');
      setFileName('Anexo');
    } else {
      throw err;
    }
  }
}

export {pickDocument};
