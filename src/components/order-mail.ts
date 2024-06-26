import emailjs from '@emailjs/browser';

function sendOrderMail (order: string): Promise<void> { 
    const serviceId = 'service_35jz1ef';
    const templateId = 'template_28x35pp';
    const publicKey = 'iEWGm_JJjqDyBg1c0';

    const templateParams = {
        cocktail_name: order,
    };

    return emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((result) => {
            console.log('Email sent successfully!', result.text);
        }, (error) => {
            console.log('Email failed...', error);
        });
}

export default sendOrderMail;
