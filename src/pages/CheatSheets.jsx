import React from "react";
import { motion } from "framer-motion";
import { cheatSheets } from "../constants/cheatsheeet";

const CheatSheetPage = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Cheat Sheets</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cheatSheets.map((sheet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{sheet.title}</h2>
            <p className="text-gray-600 mb-4">{sheet.description}</p>
            <ul className="space-y-2">
              {sheet.commands.map((cmd, cmdIndex) => (
                <li key={cmdIndex} className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <code className="bg-gray-100 p-2 text-xs rounded w-full md:w-auto">{cmd.command}</code>
                  <span className="text-gray-500 text-xs mt-1 md:mt-0 md:ml-2">{cmd.description}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CheatSheetPage;
