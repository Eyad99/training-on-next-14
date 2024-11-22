import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const ImageMiddleware = () => {
	return (
		<div className='flex flex-col'>
			<h4 className='font-bold text-3xl'>Middleware</h4>

			<CodeMirrorEditor
				value={`
   // في ملف server.js
const express = require('express');
const sharp = require('sharp');
const path = require('path');

const app = express();

// ميدلوير لمعالجة الصور
app.get('/images/:imageName', async (req, res) => {
    try {
        const imagePath = path.join(__dirname, 'uploads', req.params.imageName);
        
        // جيبلي العرض والطول من الكويري
        const width = parseInt(req.query.width) || 800;
        const quality = parseInt(req.query.quality) || 80;
        
        // معالجة الصورة
        const processedImage = await sharp(imagePath)
            .resize(width, null, {
                fit: 'contain',
                withoutEnlargement: true
            })
            .webp({ quality }) // تحويل للويب بي
            .toBuffer();
            
        res.set('Content-Type', 'image/webp');
        res.send(processedImage);
        
    } catch (error) {
        console.error('حصل مشكلة:', error);
        res.status(500).send('حصل مشكلة في معالجة الصورة');
    }
})       
`}
			/>
		</div>
	);
};

export default ImageMiddleware;
