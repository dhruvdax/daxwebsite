'use server';

import ImageKit from 'imagekit';

export const uploadToImageKit = async (file: Buffer, fileName: string) => {
    const imagekit = new ImageKit({
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || ''
    });

    if (!imagekit.options.publicKey || !imagekit.options.privateKey || !imagekit.options.urlEndpoint) {
        console.error('ImageKit environment variables are not set.');
        throw new Error('ImageKit is not configured on the server.');
    }

    try {
        const response = await imagekit.upload({
            file: file,
            fileName: fileName,
            folder: '/resumes'
        });
        return response;
    } catch (error) {
        console.error('ImageKit upload error:', error);
        throw new Error('Failed to upload file to ImageKit.');
    }
};
