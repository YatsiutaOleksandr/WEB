import pino from "pino";
import fs from "fs";
import path from "path";

// Створимо директорію для логів, якщо вона не існує
const logsDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Визначимо шляхи до файлів логів
const errorLogPath = path.join(logsDir, "error.log");
const combinedLogPath = path.join(logsDir, "combined.log");

// Функція для запису в файл
const appendToFile = (filePath: string, message: string) => {
  try {
    fs.appendFileSync(filePath, message + "\n");
  } catch (err) {
    console.error(`Failed to write to ${filePath}:`, err);
  }
};

// Функція для форматування логу
const formatLog = (level: string, obj: any, msg?: string) => {
  return JSON.stringify({
    level,
    message: msg || obj.message || "",
    data: obj,
    timestamp: new Date().toISOString(),
  });
};

export const logger = {
  info: (obj: any, msg?: string) => {
    const formatted = formatLog("info", obj, msg);
    appendToFile(combinedLogPath, formatted);
    console.log(formatted);
  },
  warn: (obj: any, msg?: string) => {
    const formatted = formatLog("warn", obj, msg);
    appendToFile(combinedLogPath, formatted);
    console.warn(formatted);
  },
  error: (obj: any, msg?: string) => {
    const formatted = formatLog("error", obj, msg);
    appendToFile(errorLogPath, formatted);
    appendToFile(combinedLogPath, formatted);
    console.error(formatted);
  },
  debug: (obj: any, msg?: string) => {
    const formatted = formatLog("debug", obj, msg);
    appendToFile(combinedLogPath, formatted);
    console.debug(formatted);
  },
};

