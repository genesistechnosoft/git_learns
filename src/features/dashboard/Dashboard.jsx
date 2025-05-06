import React from 'react';


const Introduction = () => {
  return (
    <div className="introduction-container">
      <h1 className='docu-head'>Grocery Admin Documentation</h1>
      <p className='entro'>
        Welcome to the Grocery Admin Panel documentation! This guide provides an overview of how to manage the grocery store's operations, including product management, order tracking, user management, and more.
      </p>

      <h2 className="section-heading">Purpose of the Admin Panel</h2>
      <p className='entro'>
        The Grocery Admin Panel is a centralized system designed to help store owners and managers efficiently oversee all aspects of their online grocery business. It provides an intuitive interface with powerful tools to ensure smooth operations, enhance customer satisfaction, and maximize profitability.
      </p>
      <p className='entro'>
        With this panel, administrators can perform various critical tasks, such as managing products, tracking orders, handling customer queries, monitoring inventory, and analyzing sales trends. The goal is to streamline workflows, reduce manual effort, and maintain a well-organized, customer-friendly online grocery store.
      </p>

      <h2 className="section-heading">Key Features</h2>
      <ul className='listing'>
        <li><strong>Product Management:</strong> Add, update, and remove grocery products.</li>
        <li><strong>Order Management:</strong> Track orders, update order statuses, and manage deliveries.</li>
        <li><strong>User Management:</strong> View and manage customer details and their orders.</li>
        <li><strong>Inventory Control:</strong> Keep track of stock levels and receive low-stock alerts.</li>
        <li><strong>Payment Handling:</strong> View transactions, manage refunds, and monitor payment statuses.</li>
        <li><strong>Reports & Analytics:</strong> Generate reports on sales, revenue, and customer activity.</li>
        <li><strong>Promotions & Discounts:</strong> Apply and manage discount codes and special offers.</li>
        <li><strong>Security & Roles:</strong> Assign admin roles and manage system security.</li>
      </ul>

      <h2 className="section-heading">Who Should Use This Documentation?</h2>
      <p className='entro'>
        This documentation intended for grocery store administrators, managers, and technical teams responsible for maintaining the admin panel.
      </p>

      <h2 className="section-heading">Getting Starts</h2>
      <p className='entro'>
        To begin using the Grocery Admin Panel, proceed to the <strong>Installation</strong> section to set up your system.
      </p>
    </div>
  );
};

export default Introduction;
