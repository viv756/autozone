import React from "react";

type TitleProps = {
  title: string;
  breadcrumbs?: string[];
  className?: string;
};

const Title: React.FC<TitleProps> = ({ title, breadcrumbs = [], className = "" }) => {
  return (
    <div className={`bg-gray-100 h-44 ${className}`}>
      <div className="max-w-7xl mx-auto h-44 flex flex-col gap-2 justify-center">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-gray-600">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <p>{crumb}</p>
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>
        {/* Title */}
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
