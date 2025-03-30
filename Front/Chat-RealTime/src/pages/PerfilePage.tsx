import { PerfilePageProps } from '../interface/userInterface';
import  LayoutPage  from './LayoutPage';

export default function PerfilePage({ username, biografia }: PerfilePageProps) {
  return (
    <LayoutPage>
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-48 md:h-64 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg mb-16">
        <button className="absolute right-4 bottom-4 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
          <span>Cambiar portada</span>
        </button>
        <div className="absolute -bottom-12 left-8 flex items-end">
          <div className="relative">
            <div className="h-24 w-24 bg-gray-300 rounded-full border-4 border-white"></div>
            <button className="absolute bottom-0 right-0 h-8 w-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
              <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3C1.44772 3 1 3.44772 1 4V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V4C14 3.44772 13.5523 3 13 3H2ZM0 4C0 2.89543 0.895431 2 2 2H13C14.1046 2 15 2.89543 15 4V11C15 12.1046 14.1046 13 13 13H2C0.895431 13 0 12.1046 0 11V4ZM2 4.25C2 4.11193 2.11193 4 2.25 4H4.75C4.88807 4 5 4.11193 5 4.25V5.75454C5 5.89261 4.88807 6.00454 4.75 6.00454H2.25C2.11193 6.00454 2 5.89261 2 5.75454V4.25ZM12.101 7.58421C12.101 9.02073 10.9365 10.1853 9.49998 10.1853C8.06346 10.1853 6.89893 9.02073 6.89893 7.58421C6.89893 6.14769 8.06346 4.98315 9.49998 4.98315C10.9365 4.98315 12.101 6.14769 12.101 7.58421ZM13.101 7.58421C13.101 9.57302 11.4888 11.1853 9.49998 11.1853C7.51117 11.1853 5.89893 9.57302 5.89893 7.58421C5.89893 5.5954 7.51117 3.98315 9.49998 3.98315C11.4888 3.98315 13.101 5.5954 13.101 7.58421Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            </button>
          </div>
        </div>
      </div>      
      <div className="w-full md:w-80 mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 bg-gray-300 rounded-full mb-4"></div>
          <h3 className="text-xl font-bold">{username}</h3>
          <p className="text-sm text-gray-500 mb-2">@{username.toLowerCase()}</p>
          <p className="text-sm mb-4">{biografia}</p>
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>Se unió en marzo 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LayoutPage>
  );
}