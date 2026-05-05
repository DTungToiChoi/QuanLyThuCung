import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
  });

  async sendPasswordResetEmail(email: string, resetUrl: string) {
    await this.transporter.sendMail({
      from: process.env.MAIL_FROM ?? process.env.SMTP_USER,
      to: email,
      subject: 'Reset your password',
      text: `Open this link to reset your password: ${resetUrl}`,
      html: `<p>Open this link to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`,
    });
  }

  async sendEmployeePasswordResetEmail(email: string, temporaryPassword: string) {
    await this.transporter.sendMail({
      from: process.env.MAIL_FROM ?? process.env.SMTP_USER,
      to: email,
      subject: 'Your employee account password has been reset',
      text: `Your temporary password is: ${temporaryPassword}`,
      html: `<p>Your temporary password is:</p><p><strong>${temporaryPassword}</strong></p>`,
    });
  }
}
