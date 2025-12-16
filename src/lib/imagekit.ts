'use server';

import ImageKit from 'imagekit';

export const uploadToImageKit = async (file: Buffer, fileName: string) => {
  const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    console.error('Missing ImageKit env:', {
      hasPublicKey: !!publicKey,
      hasPrivateKey: !!privateKey,
      hasUrlEndpoint: !!urlEndpoint,
    });
    throw new Error('ImageKit is not configured on the server.');
  }

  const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

  // IMPORTANT: ImageKit upload expects base64 or URL, not raw Buffer
  const base64 = file.toString('base64');

  try {
    const response = await imagekit.upload({
      file: base64,
      fileName,
      folder: '/resumes',
      useUniqueFileName: true,
    });
    return response;
  } catch (error: any) {
    // Do NOT hide the error—log the actual details
    console.error('ImageKit upload error (raw):', error);

    // Common shapes:
    const status = error?.response?.status;
    const data = error?.response?.data;
    const message = error?.message;

    console.error('ImageKit upload error (parsed):', { status, data, message });

    throw new Error(
      `ImageKit upload failed${status ? ` (HTTP ${status})` : ''}: ${
        message || JSON.stringify(data) || 'Unknown error'
      }`
    );
  }
};
