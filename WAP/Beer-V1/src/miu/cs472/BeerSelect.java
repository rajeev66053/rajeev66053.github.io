package miu.cs472;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class BeerSelect extends HttpServlet {
	
	public BeerSelect() {
		super();
	}
	
	public void doPost(HttpServletRequest request , HttpServletResponse response)
			throws ServletException, IOException {
		

		String c=request.getParameter("color");

//		out.println("<br>Got beer color "+c);
		
		BeerExpert be= new BeerExpert();
		List result=be.getBrands(c);
		

		response.setContentType("text/html");		
		PrintWriter out=response.getWriter();
		out.println("Beer Selection Advice<br>");
		
		Iterator it=result.iterator();
		while(it.hasNext()) {

			out.println("<br>try:"+ it.next());
			
		}
		
	}

}
