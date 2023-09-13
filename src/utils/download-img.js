const download = (filename, content) => {
  var element = document.createElement("a");
  element.setAttribute("href", content);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export const downloadImg = async (Referring_URL, firstname, lastname) => {
  try {
    const result = await fetch(Referring_URL, {
      method: "GET",
      headers: {}
    });
    const blob = await result.blob();
    const url = URL.createObjectURL(blob);
    download(firstname + ' ' + lastname, url);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
  }
};