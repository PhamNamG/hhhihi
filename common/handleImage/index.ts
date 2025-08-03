export const handleImage = (url?: string) => {
  const parts = url ? url.split("/") : null;
  if (parts) {
    const uploadIndex: number = parts?.indexOf(`upload`) || -1;
    if (uploadIndex !== -1) {
      parts?.splice(uploadIndex + 1, 0, `f_webp`);
    }
    return parts?.join("/");
  }
};
