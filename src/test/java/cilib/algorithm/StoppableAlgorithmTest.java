/**
 * Computational Intelligence Library (CIlib)
 * Copyright (C) 2003 - 2010
 * Computational Intelligence Research Group (CIRG@UP)
 * Department of Computer Science
 * University of Pretoria
 * South Africa
 *
 * This library is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; if not, see <http://www.gnu.org/licenses/>.
 */
package cilib.algorithm;

import cilib.pso.PSO;
import net.sourceforge.cilib.entity.Particle;
import net.sourceforge.cilib.entity.topologies.GBestTopology;
import net.sourceforge.cilib.pso.iterationstrategies.SynchronousIterationStrategy;
import org.junit.Test;

/**
 *
 * @author gpampara
 */
public class StoppableAlgorithmTest {

    @Test
    public void wrappingTest() {
        RunnableAlgorithm a = new RunnableAlgorithm(new StoppableAlgorithm(new PSO(new GBestTopology<Particle>(), new SynchronousIterationStrategy())));

        a.run();
    }

}